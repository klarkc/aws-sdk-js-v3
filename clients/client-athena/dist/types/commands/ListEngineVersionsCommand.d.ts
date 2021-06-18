import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { ListEngineVersionsInput, ListEngineVersionsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListEngineVersionsCommandInput extends ListEngineVersionsInput {}
export interface ListEngineVersionsCommandOutput extends ListEngineVersionsOutput, __MetadataBearer {}
/**
 * <p>Returns a list of engine versions that are available to choose from, including the
 *             Auto option.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListEngineVersionsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListEngineVersionsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new ListEngineVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEngineVersionsCommandInput} for command's `input` shape.
 * @see {@link ListEngineVersionsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEngineVersionsCommand extends $Command<
  ListEngineVersionsCommandInput,
  ListEngineVersionsCommandOutput,
  AthenaClientResolvedConfig
> {
  readonly input: ListEngineVersionsCommandInput;
  constructor(input: ListEngineVersionsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEngineVersionsCommandInput, ListEngineVersionsCommandOutput>;
  private serialize;
  private deserialize;
}
