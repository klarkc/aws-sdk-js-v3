import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { ListManagedSchemaArnsRequest, ListManagedSchemaArnsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListManagedSchemaArnsCommandInput extends ListManagedSchemaArnsRequest {}
export interface ListManagedSchemaArnsCommandOutput extends ListManagedSchemaArnsResponse, __MetadataBearer {}
/**
 * <p>Lists the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListManagedSchemaArnsCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListManagedSchemaArnsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListManagedSchemaArnsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListManagedSchemaArnsCommandInput} for command's `input` shape.
 * @see {@link ListManagedSchemaArnsCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListManagedSchemaArnsCommand extends $Command<
  ListManagedSchemaArnsCommandInput,
  ListManagedSchemaArnsCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: ListManagedSchemaArnsCommandInput;
  constructor(input: ListManagedSchemaArnsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListManagedSchemaArnsCommandInput, ListManagedSchemaArnsCommandOutput>;
  private serialize;
  private deserialize;
}
