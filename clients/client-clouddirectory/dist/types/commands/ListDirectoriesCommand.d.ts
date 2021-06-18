import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { ListDirectoriesRequest, ListDirectoriesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListDirectoriesCommandInput extends ListDirectoriesRequest {}
export interface ListDirectoriesCommandOutput extends ListDirectoriesResponse, __MetadataBearer {}
/**
 * <p>Lists directories created within an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListDirectoriesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListDirectoriesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListDirectoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDirectoriesCommandInput} for command's `input` shape.
 * @see {@link ListDirectoriesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDirectoriesCommand extends $Command<
  ListDirectoriesCommandInput,
  ListDirectoriesCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: ListDirectoriesCommandInput;
  constructor(input: ListDirectoriesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDirectoriesCommandInput, ListDirectoriesCommandOutput>;
  private serialize;
  private deserialize;
}
