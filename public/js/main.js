const output = document.querySelector('#output');
const button = document.querySelector('#get-posts-btn');

const showPosts = async () => {
  try {
    const res = await fetch('http://127.0.0.1:8080/api/posts');

    if (res.ok) {
      throw new Error('failed to fetch posts');
    }

    const posts = await res.json();

    output.innerHTML = '';
    posts.map((post) => {
      const postEl = document.createElement('div');
      postEl.text = post.title;
      output.appendChild(postEl);
    });
  } catch (e) {
    console.log('Error fetching post: ', e);
  }
};

// some event i guess
button.addEventListener('click', showPosts);
