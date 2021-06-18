import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { CreateBusinessReportScheduleRequest, CreateBusinessReportScheduleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateBusinessReportScheduleCommandInput extends CreateBusinessReportScheduleRequest {}
export interface CreateBusinessReportScheduleCommandOutput
  extends CreateBusinessReportScheduleResponse,
    __MetadataBearer {}
/**
 * <p>Creates a recurring schedule for usage reports to deliver to the specified S3
 *          location with a specified daily or weekly interval.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateBusinessReportScheduleCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateBusinessReportScheduleCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new CreateBusinessReportScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBusinessReportScheduleCommandInput} for command's `input` shape.
 * @see {@link CreateBusinessReportScheduleCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateBusinessReportScheduleCommand extends $Command<
  CreateBusinessReportScheduleCommandInput,
  CreateBusinessReportScheduleCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: CreateBusinessReportScheduleCommandInput;
  constructor(input: CreateBusinessReportScheduleCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateBusinessReportScheduleCommandInput, CreateBusinessReportScheduleCommandOutput>;
  private serialize;
  private deserialize;
}
