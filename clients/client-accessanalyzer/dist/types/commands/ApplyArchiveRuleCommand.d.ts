import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { ApplyArchiveRuleRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ApplyArchiveRuleCommandInput extends ApplyArchiveRuleRequest {}
export interface ApplyArchiveRuleCommandOutput extends __MetadataBearer {}
/**
 * <p>Retroactively applies the archive rule to existing findings that meet the archive rule
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ApplyArchiveRuleCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ApplyArchiveRuleCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new ApplyArchiveRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ApplyArchiveRuleCommandInput} for command's `input` shape.
 * @see {@link ApplyArchiveRuleCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ApplyArchiveRuleCommand extends $Command<
  ApplyArchiveRuleCommandInput,
  ApplyArchiveRuleCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  readonly input: ApplyArchiveRuleCommandInput;
  constructor(input: ApplyArchiveRuleCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ApplyArchiveRuleCommandInput, ApplyArchiveRuleCommandOutput>;
  private serialize;
  private deserialize;
}
