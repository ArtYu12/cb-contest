function scrollToBlock(id) {
    const block = document.getElementById(id);
    block.scrollIntoView({ behavior: 'smooth' });
}

export default scrollToBlock;