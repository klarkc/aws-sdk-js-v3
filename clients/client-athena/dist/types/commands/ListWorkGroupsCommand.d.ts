import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { ListWorkGroupsInput, ListWorkGroupsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListWorkGroupsCommandInput extends ListWorkGroupsInput {}
export interface ListWorkGroupsCommandOutput extends ListWorkGroupsOutput, __MetadataBearer {}
/**
 * <p>Lists available workgroups for the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListWorkGroupsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListWorkGroupsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new ListWorkGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkGroupsCommandInput} for command's `input` shape.
 * @see {@link ListWorkGroupsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListWorkGroupsCommand extends $Command<
  ListWorkGroupsCommandInput,
  ListWorkGroupsCommandOutput,
  AthenaClientResolvedConfig
> {
  readonly input: ListWorkGroupsCommandInput;
  constructor(input: ListWorkGroupsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWorkGroupsCommandInput, ListWorkGroupsCommandOutput>;
  private serialize;
  private deserialize;
}
