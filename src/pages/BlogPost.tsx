
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { format, parseISO } from 'date-fns';
import { Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { id } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ['post', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#2b2b2b] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-white" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#2b2b2b] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post não encontrado</h1>
          <Link 
            to="/blog" 
            className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition-colors"
          >
            Voltar para o blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#2b2b2b] text-white py-20">
      <div className="max-w-3xl mx-auto px-4">
        <Link 
          to="/blog" 
          className="inline-block px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition-colors mb-8"
        >
          Voltar para o blog
        </Link>
        <article>
          <div className="mb-2 text-sm text-white/60">
            {format(parseISO(post.published_at), 'dd/MM/yyyy')}
          </div>
          <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
