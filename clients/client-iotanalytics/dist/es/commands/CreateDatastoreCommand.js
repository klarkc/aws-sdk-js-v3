import { __extends } from "tslib";
import { CreateDatastoreRequest, CreateDatastoreResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDatastoreCommand, serializeAws_restJson1CreateDatastoreCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a data store, which is a repository for messages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, CreateDatastoreCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, CreateDatastoreCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new CreateDatastoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatastoreCommandInput} for command's `input` shape.
 * @see {@link CreateDatastoreCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDatastoreCommand = /** @class */ (function (_super) {
    __extends(CreateDatastoreCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDatastoreCommand(input) {
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
    CreateDatastoreCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTAnalyticsClient";
        var commandName = "CreateDatastoreCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDatastoreRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDatastoreResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDatastoreCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDatastoreCommand(input, context);
    };
    CreateDatastoreCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDatastoreCommand(output, context);
    };
    return CreateDatastoreCommand;
}($Command));
export { CreateDatastoreCommand };
//# sourceMappingURL=CreateDatastoreCommand.js.map