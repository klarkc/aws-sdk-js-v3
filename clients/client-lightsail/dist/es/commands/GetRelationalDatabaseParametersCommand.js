import { __extends } from "tslib";
import { GetRelationalDatabaseParametersRequest, GetRelationalDatabaseParametersResult } from "../models/models_1";
import { deserializeAws_json1_1GetRelationalDatabaseParametersCommand, serializeAws_json1_1GetRelationalDatabaseParametersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns all of the runtime parameters offered by the underlying database software, or
 *       engine, for a specific database in Amazon Lightsail.</p>
 *          <p>In addition to the parameter names and values, this operation returns other information
 *       about each parameter. This information includes whether changes require a reboot, whether the
 *       parameter is modifiable, the allowed values, and the data types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseParametersCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseParametersCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabaseParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabaseParametersCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseParametersCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRelationalDatabaseParametersCommand = /** @class */ (function (_super) {
    __extends(GetRelationalDatabaseParametersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRelationalDatabaseParametersCommand(input) {
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
    GetRelationalDatabaseParametersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetRelationalDatabaseParametersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRelationalDatabaseParametersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRelationalDatabaseParametersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRelationalDatabaseParametersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRelationalDatabaseParametersCommand(input, context);
    };
    GetRelationalDatabaseParametersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRelationalDatabaseParametersCommand(output, context);
    };
    return GetRelationalDatabaseParametersCommand;
}($Command));
export { GetRelationalDatabaseParametersCommand };
//# sourceMappingURL=GetRelationalDatabaseParametersCommand.js.map