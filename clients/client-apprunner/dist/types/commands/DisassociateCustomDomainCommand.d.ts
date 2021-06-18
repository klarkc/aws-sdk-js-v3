import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { DisassociateCustomDomainRequest, DisassociateCustomDomainResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DisassociateCustomDomainCommandInput extends DisassociateCustomDomainRequest {}
export interface DisassociateCustomDomainCommandOutput extends DisassociateCustomDomainResponse, __MetadataBearer {}
/**
 * <p>Disassociate a custom domain name from an AWS App Runner service.</p>
 *          <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS
 *         Certificate Manager (ACM)</a>. These certificates aren't deleted as part of this action. App Runner delays certificate deletion for
 *       30 days after a domain is disassociated from your service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DisassociateCustomDomainCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DisassociateCustomDomainCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new DisassociateCustomDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateCustomDomainCommandInput} for command's `input` shape.
 * @see {@link DisassociateCustomDomainCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateCustomDomainCommand extends $Command<
  DisassociateCustomDomainCommandInput,
  DisassociateCustomDomainCommandOutput,
  AppRunnerClientResolvedConfig
> {
  readonly input: DisassociateCustomDomainCommandInput;
  constructor(input: DisassociateCustomDomainCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateCustomDomainCommandInput, DisassociateCustomDomainCommandOutput>;
  private serialize;
  private deserialize;
}
