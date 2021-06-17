import { __extends } from "tslib";
import { ListSecurityConfigurationsInput, ListSecurityConfigurationsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListSecurityConfigurationsCommand, serializeAws_json1_1ListSecurityConfigurationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the security configurations visible to this account, providing their creation
 *          dates and times, and their names. This call returns a maximum of 50 clusters per call, but
 *          returns a marker to track the paging of the cluster list across multiple
 *          ListSecurityConfigurations calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListSecurityConfigurationsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListSecurityConfigurationsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListSecurityConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSecurityConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListSecurityConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSecurityConfigurationsCommand = /** @class */ (function (_super) {
    __extends(ListSecurityConfigurationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSecurityConfigurationsCommand(input) {
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
    ListSecurityConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "ListSecurityConfigurationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSecurityConfigurationsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListSecurityConfigurationsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSecurityConfigurationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListSecurityConfigurationsCommand(input, context);
    };
    ListSecurityConfigurationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListSecurityConfigurationsCommand(output, context);
    };
    return ListSecurityConfigurationsCommand;
}($Command));
export { ListSecurityConfigurationsCommand };
//# sourceMappingURL=ListSecurityConfigurationsCommand.js.map