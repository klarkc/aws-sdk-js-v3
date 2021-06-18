import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { RecordHandlerProgressInput, RecordHandlerProgressOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface RecordHandlerProgressCommandInput extends RecordHandlerProgressInput {}
export interface RecordHandlerProgressCommandOutput extends RecordHandlerProgressOutput, __MetadataBearer {}
/**
 * <p>Reports progress of a resource handler to CloudFormation.</p>
 *          <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. Do not use this API in your code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, RecordHandlerProgressCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, RecordHandlerProgressCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new RecordHandlerProgressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RecordHandlerProgressCommandInput} for command's `input` shape.
 * @see {@link RecordHandlerProgressCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RecordHandlerProgressCommand extends $Command<
  RecordHandlerProgressCommandInput,
  RecordHandlerProgressCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: RecordHandlerProgressCommandInput;
  constructor(input: RecordHandlerProgressCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RecordHandlerProgressCommandInput, RecordHandlerProgressCommandOutput>;
  private serialize;
  private deserialize;
}
