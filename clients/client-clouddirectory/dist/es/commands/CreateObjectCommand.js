import { __extends } from "tslib";
import { CreateObjectRequest, CreateObjectResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateObjectCommand,
  serializeAws_restJson1CreateObjectCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an object in a <a>Directory</a>. Additionally attaches the object to
 *       a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a
 *       collection of <a>Facet</a> attributes. You can also use this API call to create a
 *       policy object, if the facet from which you create the object is a policy facet. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, CreateObjectCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, CreateObjectCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new CreateObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateObjectCommandInput} for command's `input` shape.
 * @see {@link CreateObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateObjectCommand = /** @class */ (function (_super) {
  __extends(CreateObjectCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateObjectCommand(input) {
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
  CreateObjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "CreateObjectCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateObjectResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateObjectCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateObjectCommand(input, context);
  };
  CreateObjectCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateObjectCommand(output, context);
  };
  return CreateObjectCommand;
})($Command);
export { CreateObjectCommand };
//# sourceMappingURL=CreateObjectCommand.js.map
