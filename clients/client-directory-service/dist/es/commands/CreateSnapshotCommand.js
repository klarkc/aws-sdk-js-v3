import { __extends } from "tslib";
import { CreateSnapshotRequest, CreateSnapshotResult } from "../models/models_0";
import { deserializeAws_json1_1CreateSnapshotCommand, serializeAws_json1_1CreateSnapshotCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a snapshot of a Simple AD or Microsoft AD directory in the AWS cloud.</p>
 *          <note>
 *             <p>You cannot take snapshots of AD Connector directories.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateSnapshotCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateSnapshotCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSnapshotCommand = /** @class */ (function (_super) {
    __extends(CreateSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSnapshotCommand(input) {
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
    CreateSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "CreateSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateSnapshotCommand(input, context);
    };
    CreateSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateSnapshotCommand(output, context);
    };
    return CreateSnapshotCommand;
}($Command));
export { CreateSnapshotCommand };
//# sourceMappingURL=CreateSnapshotCommand.js.map