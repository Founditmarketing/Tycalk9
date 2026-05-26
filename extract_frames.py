import cv2
import os

videos = [
    "VIDEO-2026-04-17-13-55-20.mp4",
    "VIDEO-2026-04-17-13-55-37.mp4",
    "VIDEO-2026-04-17-13-58-00.mp4",
    "VIDEO-2026-04-17-13-58-00 2.mp4"
]

for vid in videos:
    path = os.path.join("public", vid)
    cap = cv2.VideoCapture(path)
    ret, frame = cap.read()
    if ret:
        out_path = f"frame_{vid}.jpg"
        cv2.imwrite(out_path, frame)
        print(f"Extracted frame for {vid} -> {out_path}")
    cap.release()
