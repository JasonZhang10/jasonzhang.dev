'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { format } from 'date-fns';
import 'css/prism.css';

const PostLayout = ({ params }) => {
  const [id, setId] = useState(null);

  const getSlug = async () => {
    const id = (await params).slug;
    setId(id);
  };

  useEffect(() => {
    getSlug().then();
  }, []);

  return <article className="py-8 mx-auto max-w-xl"></article>;
};

export default PostLayout;
