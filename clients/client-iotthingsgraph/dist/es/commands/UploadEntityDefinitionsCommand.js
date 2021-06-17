import { __extends } from "tslib";
import { UploadEntityDefinitionsRequest, UploadEntityDefinitionsResponse } from "../models/models_0";
import { deserializeAws_json1_1UploadEntityDefinitionsCommand, serializeAws_json1_1UploadEntityDefinitionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Asynchronously uploads one or more entity definitions to the user's namespace. The <code>document</code> parameter is required if
 *       <code>syncWithPublicNamespace</code> and <code>deleteExistingEntites</code> are false. If the <code>syncWithPublicNamespace</code> parameter  is set to
 *          <code>true</code>, the user's namespace will synchronize with the latest version of the public namespace. If <code>deprecateExistingEntities</code> is set to true,
 *       all entities in the latest version will be deleted before the new <code>DefinitionDocument</code> is uploaded.</p>
 *          <p>When a user uploads entity definitions for the first time, the service creates a new namespace for the user. The new namespace tracks the public namespace. Currently users
 *       can have only one namespace. The namespace version increments whenever a user uploads entity definitions that are backwards-incompatible and whenever a user sets the
 *          <code>syncWithPublicNamespace</code> parameter or the <code>deprecateExistingEntities</code> parameter to <code>true</code>.</p>
 *          <p>The IDs for all of the entities should be in URN format. Each entity must be in the user's namespace. Users can't create entities in the public namespace, but entity definitions can refer to entities in the public namespace.</p>
 *          <p>Valid entities are <code>Device</code>, <code>DeviceModel</code>, <code>Service</code>, <code>Capability</code>, <code>State</code>, <code>Action</code>, <code>Event</code>, <code>Property</code>,
 *          <code>Mapping</code>, <code>Enum</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, UploadEntityDefinitionsCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, UploadEntityDefinitionsCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new UploadEntityDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UploadEntityDefinitionsCommandInput} for command's `input` shape.
 * @see {@link UploadEntityDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UploadEntityDefinitionsCommand = /** @class */ (function (_super) {
    __extends(UploadEntityDefinitionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UploadEntityDefinitionsCommand(input) {
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
    UploadEntityDefinitionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "UploadEntityDefinitionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UploadEntityDefinitionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UploadEntityDefinitionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UploadEntityDefinitionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UploadEntityDefinitionsCommand(input, context);
    };
    UploadEntityDefinitionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UploadEntityDefinitionsCommand(output, context);
    };
    return UploadEntityDefinitionsCommand;
}($Command));
export { UploadEntityDefinitionsCommand };
//# sourceMappingURL=UploadEntityDefinitionsCommand.js.map