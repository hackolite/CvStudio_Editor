import { z } from 'zod'
import { BaseNode, nodeType, objectId } from '../base'

export const SurveillanceCameraNode = BaseNode.extend({
  id: objectId('surveillance_camera'),
  type: nodeType('surveillance_camera'),
  /** World-space position [x, y, z]. Default height of 2.5 m matches typical indoor mounting. */
  position: z.tuple([z.number(), z.number(), z.number()]).default([0, 2.5, 0]),
  /** Yaw (horizontal pan) in radians. */
  rotation: z.number().default(0),
  /** Pitch (vertical tilt) in radians. Negative = pointing down. Default ≈ -20° (-0.349 rad). */
  tilt: z.number().default(-0.349),
  /** Horizontal field of view in degrees. 90° is standard for wide-angle CCTV lenses. */
  fov: z.number().min(10).max(180).default(90),
  /** Maximum detection range in metres. */
  maxRange: z.number().min(1).default(15),
  /** Whether the camera has infrared / night-vision capability. */
  nightVision: z.boolean().default(false),
})

export type SurveillanceCameraNode = z.infer<typeof SurveillanceCameraNode>
