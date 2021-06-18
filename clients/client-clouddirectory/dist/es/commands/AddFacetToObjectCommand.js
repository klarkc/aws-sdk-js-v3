import { __extends } from "tslib";
import { AddFacetToObjectRequest, AddFacetToObjectResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AddFacetToObjectCommand,
  serializeAws_restJson1AddFacetToObjectCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, AddFacetToObjectCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, AddFacetToObjectCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new AddFacetToObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddFacetToObjectCommandInput} for command's `input` shape.
 * @see {@link AddFacetToObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddFacetToObjectCommand = /** @class */ (function (_super) {
  __extends(AddFacetToObjectCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function AddFacetToObjectCommand(input) {
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
  AddFacetToObjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "AddFacetToObjectCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: AddFacetToObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AddFacetToObjectResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  AddFacetToObjectCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1AddFacetToObjectCommand(input, context);
  };
  AddFacetToObjectCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1AddFacetToObjectCommand(output, context);
  };
  return AddFacetToObjectCommand;
})($Command);
export { AddFacetToObjectCommand };
//# sourceMappingURL=AddFacetToObjectCommand.js.map
