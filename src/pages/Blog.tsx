
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { Loader2 } from 'lucide-react';

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('published_at', { ascending: false });
      
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

  return (
    <div className="min-h-screen bg-[#2b2b2b] text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Blog Hypnos</h1>
          <Link 
            to="/" 
            className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition-colors"
          >
            Voltar
          </Link>
        </div>
        <div className="grid gap-8">
          {posts?.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`}
              className="block p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="mb-2 text-sm text-white/60">
                {format(parseISO(post.published_at), 'dd/MM/yyyy')}
              </div>
              <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
              <p className="text-white/80">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
