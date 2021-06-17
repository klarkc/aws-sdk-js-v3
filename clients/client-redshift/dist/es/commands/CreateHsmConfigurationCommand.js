import { __extends } from "tslib";
import { CreateHsmConfigurationMessage, CreateHsmConfigurationResult } from "../models/models_0";
import { deserializeAws_queryCreateHsmConfigurationCommand, serializeAws_queryCreateHsmConfigurationCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an HSM configuration that contains the information required by an Amazon Redshift
 *             cluster to store and use database encryption keys in a Hardware Security Module (HSM).
 *             After creating the HSM configuration, you can specify it as a parameter when creating a
 *             cluster. The cluster will then store its encryption keys in the HSM.</p>
 *         <p>In addition to creating an HSM configuration, you must also create an HSM client
 *             certificate. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a>
 *             in the Amazon Redshift Cluster Management Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateHsmConfigurationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateHsmConfigurationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateHsmConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHsmConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateHsmConfigurationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateHsmConfigurationCommand = /** @class */ (function (_super) {
    __extends(CreateHsmConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateHsmConfigurationCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    CreateHsmConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "CreateHsmConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateHsmConfigurationMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateHsmConfigurationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateHsmConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateHsmConfigurationCommand(input, context);
    };
    CreateHsmConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateHsmConfigurationCommand(output, context);
    };
    return CreateHsmConfigurationCommand;
}($Command));
export { CreateHsmConfigurationCommand };
//# sourceMappingURL=CreateHsmConfigurationCommand.js.map