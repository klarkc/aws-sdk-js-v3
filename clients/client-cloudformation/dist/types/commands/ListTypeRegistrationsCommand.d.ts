import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListTypeRegistrationsInput, ListTypeRegistrationsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListTypeRegistrationsCommandInput extends ListTypeRegistrationsInput {}
export interface ListTypeRegistrationsCommandOutput extends ListTypeRegistrationsOutput, __MetadataBearer {}
/**
 * <p>Returns a list of registration tokens for the specified extension(s).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListTypeRegistrationsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListTypeRegistrationsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListTypeRegistrationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTypeRegistrationsCommandInput} for command's `input` shape.
 * @see {@link ListTypeRegistrationsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTypeRegistrationsCommand extends $Command<
  ListTypeRegistrationsCommandInput,
  ListTypeRegistrationsCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: ListTypeRegistrationsCommandInput;
  constructor(input: ListTypeRegistrationsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTypeRegistrationsCommandInput, ListTypeRegistrationsCommandOutput>;
  private serialize;
  private deserialize;
}
