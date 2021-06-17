import { __extends } from "tslib";
import { SelectAggregateResourceConfigRequest, SelectAggregateResourceConfigResponse } from "../models/models_1";
import { deserializeAws_json1_1SelectAggregateResourceConfigCommand, serializeAws_json1_1SelectAggregateResourceConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of AWS resources across multiple accounts and regions,
 * 			performs the corresponding search, and returns resource configurations matching the properties.</p>
 * 		       <p>For more information about query components, see the
 * 			<a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html">
 *                <b>Query Components</b>
 *             </a> section in the AWS Config Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, SelectAggregateResourceConfigCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, SelectAggregateResourceConfigCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new SelectAggregateResourceConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SelectAggregateResourceConfigCommandInput} for command's `input` shape.
 * @see {@link SelectAggregateResourceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SelectAggregateResourceConfigCommand = /** @class */ (function (_super) {
    __extends(SelectAggregateResourceConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SelectAggregateResourceConfigCommand(input) {
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
    SelectAggregateResourceConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "SelectAggregateResourceConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SelectAggregateResourceConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SelectAggregateResourceConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SelectAggregateResourceConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SelectAggregateResourceConfigCommand(input, context);
    };
    SelectAggregateResourceConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SelectAggregateResourceConfigCommand(output, context);
    };
    return SelectAggregateResourceConfigCommand;
}($Command));
export { SelectAggregateResourceConfigCommand };
//# sourceMappingURL=SelectAggregateResourceConfigCommand.js.map