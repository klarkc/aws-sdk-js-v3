import { __extends } from "tslib";
import { CreateInstancesFromSnapshotRequest, CreateInstancesFromSnapshotResult } from "../models/models_0";
import { deserializeAws_json1_1CreateInstancesFromSnapshotCommand, serializeAws_json1_1CreateInstancesFromSnapshotCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates one or more new instances from a manual or automatic snapshot of an
 *       instance.</p>
 *          <p>The <code>create instances from snapshot</code> operation supports tag-based access
 *       control via request tags and resource tags applied to the resource identified by
 *         <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateInstancesFromSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateInstancesFromSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateInstancesFromSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInstancesFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateInstancesFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateInstancesFromSnapshotCommand = /** @class */ (function (_super) {
    __extends(CreateInstancesFromSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateInstancesFromSnapshotCommand(input) {
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
    CreateInstancesFromSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "CreateInstancesFromSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateInstancesFromSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateInstancesFromSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateInstancesFromSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateInstancesFromSnapshotCommand(input, context);
    };
    CreateInstancesFromSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateInstancesFromSnapshotCommand(output, context);
    };
    return CreateInstancesFromSnapshotCommand;
}($Command));
export { CreateInstancesFromSnapshotCommand };
//# sourceMappingURL=CreateInstancesFromSnapshotCommand.js.map