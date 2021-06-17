import { __extends } from "tslib";
import { CreateLocationEfsRequest, CreateLocationEfsResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateLocationEfsCommand, serializeAws_json1_1CreateLocationEfsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an endpoint for an Amazon EFS file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationEfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationEfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateLocationEfsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocationEfsCommandInput} for command's `input` shape.
 * @see {@link CreateLocationEfsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLocationEfsCommand = /** @class */ (function (_super) {
    __extends(CreateLocationEfsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLocationEfsCommand(input) {
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
    CreateLocationEfsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "CreateLocationEfsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLocationEfsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLocationEfsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLocationEfsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateLocationEfsCommand(input, context);
    };
    CreateLocationEfsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateLocationEfsCommand(output, context);
    };
    return CreateLocationEfsCommand;
}($Command));
export { CreateLocationEfsCommand };
//# sourceMappingURL=CreateLocationEfsCommand.js.map