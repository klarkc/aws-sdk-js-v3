import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { ListArchiveRulesRequest, ListArchiveRulesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListArchiveRulesCommandInput extends ListArchiveRulesRequest {}
export interface ListArchiveRulesCommandOutput extends ListArchiveRulesResponse, __MetadataBearer {}
/**
 * <p>Retrieves a list of archive rules created for the specified analyzer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ListArchiveRulesCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ListArchiveRulesCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new ListArchiveRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListArchiveRulesCommandInput} for command's `input` shape.
 * @see {@link ListArchiveRulesCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListArchiveRulesCommand extends $Command<
  ListArchiveRulesCommandInput,
  ListArchiveRulesCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  readonly input: ListArchiveRulesCommandInput;
  constructor(input: ListArchiveRulesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListArchiveRulesCommandInput, ListArchiveRulesCommandOutput>;
  private serialize;
  private deserialize;
}
