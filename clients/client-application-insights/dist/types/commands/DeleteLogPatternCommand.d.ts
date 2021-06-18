import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { DeleteLogPatternRequest, DeleteLogPatternResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteLogPatternCommandInput extends DeleteLogPatternRequest {}
export interface DeleteLogPatternCommandOutput extends DeleteLogPatternResponse, __MetadataBearer {}
/**
 * <p>Removes the specified log pattern from a <code>LogPatternSet</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DeleteLogPatternCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DeleteLogPatternCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new DeleteLogPatternCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLogPatternCommandInput} for command's `input` shape.
 * @see {@link DeleteLogPatternCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLogPatternCommand extends $Command<
  DeleteLogPatternCommandInput,
  DeleteLogPatternCommandOutput,
  ApplicationInsightsClientResolvedConfig
> {
  readonly input: DeleteLogPatternCommandInput;
  constructor(input: DeleteLogPatternCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationInsightsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLogPatternCommandInput, DeleteLogPatternCommandOutput>;
  private serialize;
  private deserialize;
}
