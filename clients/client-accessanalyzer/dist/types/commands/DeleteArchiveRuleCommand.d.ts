import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { DeleteArchiveRuleRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteArchiveRuleCommandInput extends DeleteArchiveRuleRequest {}
export interface DeleteArchiveRuleCommandOutput extends __MetadataBearer {}
/**
 * <p>Deletes the specified archive rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, DeleteArchiveRuleCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, DeleteArchiveRuleCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new DeleteArchiveRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteArchiveRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteArchiveRuleCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteArchiveRuleCommand extends $Command<
  DeleteArchiveRuleCommandInput,
  DeleteArchiveRuleCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  readonly input: DeleteArchiveRuleCommandInput;
  constructor(input: DeleteArchiveRuleCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteArchiveRuleCommandInput, DeleteArchiveRuleCommandOutput>;
  private serialize;
  private deserialize;
}
