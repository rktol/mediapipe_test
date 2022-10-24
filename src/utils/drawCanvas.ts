import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
// import { HAND_CONNECTIONS, NormalizedLandmarkListList, Results } from '@mediapipe/hands';
import { POSE_CONNECTIONS, FACEMESH_TESSELATION, HAND_CONNECTIONS, Results } from '@mediapipe/holistic';

/**
 * cnavasに描画する
 * @param ctx canvas context
 * @param results 手の検出結果
 */
export const drawCanvas = (ctx: CanvasRenderingContext2D, results: Results) => {
    const width = ctx.canvas.width
    const height = ctx.canvas.height

    ctx.save()
    ctx.clearRect(0, 0, width, height)
    // canvas の左右反転
    ctx.scale(-1, 1)
    ctx.translate(-width, 0)
    // capture image の描画
    ctx.drawImage(results.image, 0, 0, width, height)
    ctx.globalCompositeOperation = 'source-over'
    // drawConnectors(ctx, results.poseLandmarks, POSE_CONNECTIONS, {color: '#00FF00', lineWidth: 4})
    // drawLandmarks(ctx, results.poseLandmarks, {color: '#FF0000', lineWidth: 0.1})
    // drawConnectors(ctx, results.faceLandmarks, FACEMESH_TESSELATION, {color: '#C0C0C070', lineWidth: 1});
    // drawConnectors(ctx, results.leftHandLandmarks, HAND_CONNECTIONS, {color: '#CC0000', lineWidth: 5});
    // drawLandmarks(ctx, results.leftHandLandmarks, {color: '#00FF00', lineWidth: 2});
    // drawConnectors(ctx, results.rightHandLandmarks, HAND_CONNECTIONS, {color: '#00CC00', lineWidth: 5});
    // drawLandmarks(ctx, results.rightHandLandmarks, {color: '#FF0000', lineWidth: 2});
    // console.log(results) 
    ctx.restore()
}

// https://google.github.io/mediapipe/solutions/holistic#enable_segmentation