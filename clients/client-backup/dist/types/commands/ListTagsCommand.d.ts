import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { ListTagsInput, ListTagsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListTagsCommandInput extends ListTagsInput {}
export interface ListTagsCommandOutput extends ListTagsOutput, __MetadataBearer {}
/**
 * <p>Returns a list of key-value pairs assigned to a target recovery point, backup plan, or
 *          backup vault.</p>
 *          <note>
 *             <p>
 *                <code>ListTags</code> are currently only supported with Amazon EFS backups.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListTagsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListTagsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsCommandInput} for command's `input` shape.
 * @see {@link ListTagsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTagsCommand extends $Command<
  ListTagsCommandInput,
  ListTagsCommandOutput,
  BackupClientResolvedConfig
> {
  readonly input: ListTagsCommandInput;
  constructor(input: ListTagsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTagsCommandInput, ListTagsCommandOutput>;
  private serialize;
  private deserialize;
}
