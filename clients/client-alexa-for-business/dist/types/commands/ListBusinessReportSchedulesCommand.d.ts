import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListBusinessReportSchedulesRequest, ListBusinessReportSchedulesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListBusinessReportSchedulesCommandInput extends ListBusinessReportSchedulesRequest {}
export interface ListBusinessReportSchedulesCommandOutput
  extends ListBusinessReportSchedulesResponse,
    __MetadataBearer {}
/**
 * <p>Lists the details of the schedules that a user configured. A download URL of the report associated with each schedule is returned every time this action is called. A new download URL is returned each time, and is valid for 24 hours.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListBusinessReportSchedulesCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListBusinessReportSchedulesCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new ListBusinessReportSchedulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBusinessReportSchedulesCommandInput} for command's `input` shape.
 * @see {@link ListBusinessReportSchedulesCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBusinessReportSchedulesCommand extends $Command<
  ListBusinessReportSchedulesCommandInput,
  ListBusinessReportSchedulesCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: ListBusinessReportSchedulesCommandInput;
  constructor(input: ListBusinessReportSchedulesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBusinessReportSchedulesCommandInput, ListBusinessReportSchedulesCommandOutput>;
  private serialize;
  private deserialize;
}
