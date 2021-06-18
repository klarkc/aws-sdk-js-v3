import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { CreateAnalyzerRequest, CreateAnalyzerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateAnalyzerCommandInput extends CreateAnalyzerRequest {}
export interface CreateAnalyzerCommandOutput extends CreateAnalyzerResponse, __MetadataBearer {}
/**
 * <p>Creates an analyzer for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, CreateAnalyzerCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, CreateAnalyzerCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new CreateAnalyzerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAnalyzerCommandInput} for command's `input` shape.
 * @see {@link CreateAnalyzerCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAnalyzerCommand extends $Command<
  CreateAnalyzerCommandInput,
  CreateAnalyzerCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  readonly input: CreateAnalyzerCommandInput;
  constructor(input: CreateAnalyzerCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAnalyzerCommandInput, CreateAnalyzerCommandOutput>;
  private serialize;
  private deserialize;
}
