import { __extends } from "tslib";
import { CreateLocationNfsRequest, CreateLocationNfsResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateLocationNfsCommand, serializeAws_json1_1CreateLocationNfsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Defines a file system on a Network File System (NFS) server that can be read from or
 *       written to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationNfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationNfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateLocationNfsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocationNfsCommandInput} for command's `input` shape.
 * @see {@link CreateLocationNfsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLocationNfsCommand = /** @class */ (function (_super) {
    __extends(CreateLocationNfsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLocationNfsCommand(input) {
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
    CreateLocationNfsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "CreateLocationNfsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLocationNfsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLocationNfsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLocationNfsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateLocationNfsCommand(input, context);
    };
    CreateLocationNfsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateLocationNfsCommand(output, context);
    };
    return CreateLocationNfsCommand;
}($Command));
export { CreateLocationNfsCommand };
//# sourceMappingURL=CreateLocationNfsCommand.js.map