import { __extends } from "tslib";
import { RegisterResourceRequest, RegisterResourceResponse } from "../models/models_0";
import { deserializeAws_json1_1RegisterResourceCommand, serializeAws_json1_1RegisterResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers the resource as managed by the Data Catalog.</p>
 *
 * 	        <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p>
 *
 *          <p>The following request registers a new location and gives AWS Lake Formation permission to use the service-linked role to access that location.</p>
 *
 *          <p>
 *             <code>ResourceArn = arn:aws:s3:::my-bucket
 * UseServiceLinkedRole = true</code>
 *          </p>
 *
 * 	        <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p>
 *
 *          <p>
 *             <code>arn:aws:iam::12345:role/my-data-access-role</code>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, RegisterResourceCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, RegisterResourceCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new RegisterResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterResourceCommandInput} for command's `input` shape.
 * @see {@link RegisterResourceCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterResourceCommand = /** @class */ (function (_super) {
    __extends(RegisterResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterResourceCommand(input) {
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
    RegisterResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LakeFormationClient";
        var commandName = "RegisterResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterResourceCommand(input, context);
    };
    RegisterResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterResourceCommand(output, context);
    };
    return RegisterResourceCommand;
}($Command));
export { RegisterResourceCommand };
//# sourceMappingURL=RegisterResourceCommand.js.map