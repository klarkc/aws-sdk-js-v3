import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { UpdateArchiveRuleRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateArchiveRuleCommandInput extends UpdateArchiveRuleRequest {}
export interface UpdateArchiveRuleCommandOutput extends __MetadataBearer {}
/**
 * <p>Updates the criteria and values for the specified archive rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, UpdateArchiveRuleCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, UpdateArchiveRuleCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new UpdateArchiveRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateArchiveRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateArchiveRuleCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateArchiveRuleCommand extends $Command<
  UpdateArchiveRuleCommandInput,
  UpdateArchiveRuleCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  readonly input: UpdateArchiveRuleCommandInput;
  constructor(input: UpdateArchiveRuleCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateArchiveRuleCommandInput, UpdateArchiveRuleCommandOutput>;
  private serialize;
  private deserialize;
}
