import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { PutRoomSkillParameterRequest, PutRoomSkillParameterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface PutRoomSkillParameterCommandInput extends PutRoomSkillParameterRequest {}
export interface PutRoomSkillParameterCommandOutput extends PutRoomSkillParameterResponse, __MetadataBearer {}
/**
 * <p>Updates room skill parameter details by room, skill, and parameter key ID. Not all
 *          skills have a room skill parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, PutRoomSkillParameterCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, PutRoomSkillParameterCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new PutRoomSkillParameterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRoomSkillParameterCommandInput} for command's `input` shape.
 * @see {@link PutRoomSkillParameterCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutRoomSkillParameterCommand extends $Command<
  PutRoomSkillParameterCommandInput,
  PutRoomSkillParameterCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: PutRoomSkillParameterCommandInput;
  constructor(input: PutRoomSkillParameterCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRoomSkillParameterCommandInput, PutRoomSkillParameterCommandOutput>;
  private serialize;
  private deserialize;
}
