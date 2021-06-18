import { __extends } from "tslib";
import { RemoveFacetFromObjectRequest, RemoveFacetFromObjectResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RemoveFacetFromObjectCommand,
  serializeAws_restJson1RemoveFacetFromObjectCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified facet from the specified object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, RemoveFacetFromObjectCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, RemoveFacetFromObjectCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new RemoveFacetFromObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveFacetFromObjectCommandInput} for command's `input` shape.
 * @see {@link RemoveFacetFromObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveFacetFromObjectCommand = /** @class */ (function (_super) {
  __extends(RemoveFacetFromObjectCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function RemoveFacetFromObjectCommand(input) {
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
  RemoveFacetFromObjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "RemoveFacetFromObjectCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: RemoveFacetFromObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveFacetFromObjectResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  RemoveFacetFromObjectCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1RemoveFacetFromObjectCommand(input, context);
  };
  RemoveFacetFromObjectCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1RemoveFacetFromObjectCommand(output, context);
  };
  return RemoveFacetFromObjectCommand;
})($Command);
export { RemoveFacetFromObjectCommand };
//# sourceMappingURL=RemoveFacetFromObjectCommand.js.map
