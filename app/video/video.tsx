

export default function Video() {
    return (
        <div>
            {/* video adjust */}
            <div>
                <div>
                    <video controls autoPlay loop width="1450 " className="min-w-full">
                        <source src="/EBT-Vid-Sound.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}
