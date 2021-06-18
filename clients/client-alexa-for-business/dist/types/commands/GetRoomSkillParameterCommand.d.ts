import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetRoomSkillParameterRequest, GetRoomSkillParameterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetRoomSkillParameterCommandInput extends GetRoomSkillParameterRequest {}
export interface GetRoomSkillParameterCommandOutput extends GetRoomSkillParameterResponse, __MetadataBearer {}
/**
 * <p>Gets room skill parameter details by room, skill, and parameter key ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetRoomSkillParameterCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetRoomSkillParameterCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new GetRoomSkillParameterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRoomSkillParameterCommandInput} for command's `input` shape.
 * @see {@link GetRoomSkillParameterCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRoomSkillParameterCommand extends $Command<
  GetRoomSkillParameterCommandInput,
  GetRoomSkillParameterCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: GetRoomSkillParameterCommandInput;
  constructor(input: GetRoomSkillParameterCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRoomSkillParameterCommandInput, GetRoomSkillParameterCommandOutput>;
  private serialize;
  private deserialize;
}
