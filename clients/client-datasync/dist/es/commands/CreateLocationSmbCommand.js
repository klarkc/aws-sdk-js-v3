import { __extends } from "tslib";
import { CreateLocationSmbRequest, CreateLocationSmbResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateLocationSmbCommand, serializeAws_json1_1CreateLocationSmbCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Defines a file system on a Server Message Block (SMB) server that can be read from or
 *       written to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationSmbCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationSmbCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateLocationSmbCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocationSmbCommandInput} for command's `input` shape.
 * @see {@link CreateLocationSmbCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLocationSmbCommand = /** @class */ (function (_super) {
    __extends(CreateLocationSmbCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLocationSmbCommand(input) {
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
    CreateLocationSmbCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "CreateLocationSmbCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLocationSmbRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLocationSmbResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLocationSmbCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateLocationSmbCommand(input, context);
    };
    CreateLocationSmbCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateLocationSmbCommand(output, context);
    };
    return CreateLocationSmbCommand;
}($Command));
export { CreateLocationSmbCommand };
//# sourceMappingURL=CreateLocationSmbCommand.js.map