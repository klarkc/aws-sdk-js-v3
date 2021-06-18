import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { AssociateSkillGroupWithRoomRequest, AssociateSkillGroupWithRoomResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface AssociateSkillGroupWithRoomCommandInput extends AssociateSkillGroupWithRoomRequest {}
export interface AssociateSkillGroupWithRoomCommandOutput
  extends AssociateSkillGroupWithRoomResponse,
    __MetadataBearer {}
/**
 * <p>Associates a skill group with a given room. This enables all skills in the associated
 *          skill group on all devices in the room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, AssociateSkillGroupWithRoomCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, AssociateSkillGroupWithRoomCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new AssociateSkillGroupWithRoomCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateSkillGroupWithRoomCommandInput} for command's `input` shape.
 * @see {@link AssociateSkillGroupWithRoomCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateSkillGroupWithRoomCommand extends $Command<
  AssociateSkillGroupWithRoomCommandInput,
  AssociateSkillGroupWithRoomCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: AssociateSkillGroupWithRoomCommandInput;
  constructor(input: AssociateSkillGroupWithRoomCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateSkillGroupWithRoomCommandInput, AssociateSkillGroupWithRoomCommandOutput>;
  private serialize;
  private deserialize;
}
