import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { ResumeServiceRequest, ResumeServiceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ResumeServiceCommandInput extends ResumeServiceRequest {}
export interface ResumeServiceCommandOutput extends ResumeServiceResponse, __MetadataBearer {}
/**
 * <p>Resume an active AWS App Runner service. App Runner provisions compute capacity for the service.</p>
 *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a>
 *       call to track the operation's progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, ResumeServiceCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, ResumeServiceCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new ResumeServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResumeServiceCommandInput} for command's `input` shape.
 * @see {@link ResumeServiceCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResumeServiceCommand extends $Command<
  ResumeServiceCommandInput,
  ResumeServiceCommandOutput,
  AppRunnerClientResolvedConfig
> {
  readonly input: ResumeServiceCommandInput;
  constructor(input: ResumeServiceCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResumeServiceCommandInput, ResumeServiceCommandOutput>;
  private serialize;
  private deserialize;
}
