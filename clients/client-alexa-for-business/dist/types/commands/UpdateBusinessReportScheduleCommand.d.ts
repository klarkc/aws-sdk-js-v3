import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { UpdateBusinessReportScheduleRequest, UpdateBusinessReportScheduleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateBusinessReportScheduleCommandInput extends UpdateBusinessReportScheduleRequest {}
export interface UpdateBusinessReportScheduleCommandOutput
  extends UpdateBusinessReportScheduleResponse,
    __MetadataBearer {}
/**
 * <p>Updates the configuration of the report delivery schedule with the specified schedule
 *          ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateBusinessReportScheduleCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateBusinessReportScheduleCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new UpdateBusinessReportScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBusinessReportScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateBusinessReportScheduleCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateBusinessReportScheduleCommand extends $Command<
  UpdateBusinessReportScheduleCommandInput,
  UpdateBusinessReportScheduleCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: UpdateBusinessReportScheduleCommandInput;
  constructor(input: UpdateBusinessReportScheduleCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBusinessReportScheduleCommandInput, UpdateBusinessReportScheduleCommandOutput>;
  private serialize;
  private deserialize;
}
