import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ConfigurationSettingsValidationMessages, ValidateConfigurationSettingsMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ValidateConfigurationSettingsCommandInput extends ValidateConfigurationSettingsMessage {
}
export interface ValidateConfigurationSettingsCommandOutput extends ConfigurationSettingsValidationMessages, __MetadataBearer {
}
/**
 * <p>Takes a set of configuration settings and either a configuration template or
 *       environment, and determines whether those values are valid.</p>
 *          <p>This action returns a list of messages indicating any errors or warnings associated
 *       with the selection of option values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ValidateConfigurationSettingsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ValidateConfigurationSettingsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new ValidateConfigurationSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ValidateConfigurationSettingsCommandInput} for command's `input` shape.
 * @see {@link ValidateConfigurationSettingsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ValidateConfigurationSettingsCommand extends $Command<ValidateConfigurationSettingsCommandInput, ValidateConfigurationSettingsCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: ValidateConfigurationSettingsCommandInput;
    constructor(input: ValidateConfigurationSettingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ValidateConfigurationSettingsCommandInput, ValidateConfigurationSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
