import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { ListProtectedResourcesInput, ListProtectedResourcesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListProtectedResourcesCommandInput extends ListProtectedResourcesInput {}
export interface ListProtectedResourcesCommandOutput extends ListProtectedResourcesOutput, __MetadataBearer {}
/**
 * <p>Returns an array of resources successfully backed up by AWS Backup, including the time
 *          the resource was saved, an Amazon Resource Name (ARN) of the resource, and a resource
 *          type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListProtectedResourcesCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListProtectedResourcesCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListProtectedResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProtectedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListProtectedResourcesCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProtectedResourcesCommand extends $Command<
  ListProtectedResourcesCommandInput,
  ListProtectedResourcesCommandOutput,
  BackupClientResolvedConfig
> {
  readonly input: ListProtectedResourcesCommandInput;
  constructor(input: ListProtectedResourcesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProtectedResourcesCommandInput, ListProtectedResourcesCommandOutput>;
  private serialize;
  private deserialize;
}
