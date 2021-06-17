import { __extends } from "tslib";
import { AddTagsRequest, AddTagsResponse } from "../models/models_0";
import { deserializeAws_json1_1AddTagsCommand, serializeAws_json1_1AddTagsCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds one or more tags to a trail, up to a limit of 50. Overwrites an existing tag's value when a new value is specified for an existing tag key.
 *          Tag key names must be unique for a trail; you cannot have two keys with the same name but different values.
 *           If you specify a key without a value, the tag will be created with the specified key and a value of null.
 *           You can tag a trail that applies to all AWS Regions only from the Region in which the trail was created (also known as its home region).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, AddTagsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, AddTagsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new AddTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsCommandInput} for command's `input` shape.
 * @see {@link AddTagsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddTagsCommand = /** @class */ (function (_super) {
    __extends(AddTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddTagsCommand(input) {
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
    AddTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudTrailClient";
        var commandName = "AddTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddTagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddTagsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddTagsCommand(input, context);
    };
    AddTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddTagsCommand(output, context);
    };
    return AddTagsCommand;
}($Command));
export { AddTagsCommand };
//# sourceMappingURL=AddTagsCommand.js.map