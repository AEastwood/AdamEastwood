function Contact() {
    return (
        <div>
            <a
                className="m-4 text-sm sm:text-base inline-flex text-left items-center space-x-6 bg-gray-800 text-white rounded-lg p-4 px-8 pl-6"
                href="mailto:adam-3@live.co.uk"
                title="Email Me"
            >
                <span className="flex gap-4 font-mono">
                    <span className="shrink-0 text-gray-500">
                        $
                    </span>

                    <span className="flex gap-2">
                        <span>
                            npm contact
                        </span>

                        <span className="text-yellow-500">
                            email/adam-eastwood
                        </span>
                    </span>
                </span>
            </a>
        </div>
    )
}

export default Contact
