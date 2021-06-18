import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { HostedConfigurationVersions, ListHostedConfigurationVersionsRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListHostedConfigurationVersionsCommandInput extends ListHostedConfigurationVersionsRequest {}
export interface ListHostedConfigurationVersionsCommandOutput extends HostedConfigurationVersions, __MetadataBearer {}
/**
 * <p>View a list of configurations stored in the AppConfig configuration store by
 *          version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ListHostedConfigurationVersionsCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ListHostedConfigurationVersionsCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new ListHostedConfigurationVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHostedConfigurationVersionsCommandInput} for command's `input` shape.
 * @see {@link ListHostedConfigurationVersionsCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListHostedConfigurationVersionsCommand extends $Command<
  ListHostedConfigurationVersionsCommandInput,
  ListHostedConfigurationVersionsCommandOutput,
  AppConfigClientResolvedConfig
> {
  readonly input: ListHostedConfigurationVersionsCommandInput;
  constructor(input: ListHostedConfigurationVersionsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListHostedConfigurationVersionsCommandInput, ListHostedConfigurationVersionsCommandOutput>;
  private serialize;
  private deserialize;
}
