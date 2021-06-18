import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { CreateLogPatternRequest, CreateLogPatternResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateLogPatternCommandInput extends CreateLogPatternRequest {}
export interface CreateLogPatternCommandOutput extends CreateLogPatternResponse, __MetadataBearer {}
/**
 * <p>Adds an log pattern to a <code>LogPatternSet</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, CreateLogPatternCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, CreateLogPatternCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new CreateLogPatternCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLogPatternCommandInput} for command's `input` shape.
 * @see {@link CreateLogPatternCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLogPatternCommand extends $Command<
  CreateLogPatternCommandInput,
  CreateLogPatternCommandOutput,
  ApplicationInsightsClientResolvedConfig
> {
  readonly input: CreateLogPatternCommandInput;
  constructor(input: CreateLogPatternCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationInsightsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLogPatternCommandInput, CreateLogPatternCommandOutput>;
  private serialize;
  private deserialize;
}
