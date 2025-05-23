const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className="bg-gray-300 m-4 py-4 rounded-lg pl-2">
            <h2 className="text-xl rounded-lg">{title}</h2>
        </div>
    );
};

export default Bookmark;