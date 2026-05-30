function PostCart({ dateString }) {
    const formatDate = (dateString) =>
        new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
      return (
          <span className='text-xs sm:text-sm text-[#262626]/60'>{formatDate(dateString)}</span>
      )
    }
    
    export default PostCart