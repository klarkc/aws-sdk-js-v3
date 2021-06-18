import { __extends } from "tslib";
import { CreateDataCatalogInput, CreateDataCatalogOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateDataCatalogCommand,
  serializeAws_json1_1CreateDataCatalogCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates (registers) a data catalog with the specified name and properties. Catalogs
 *             created are visible to all users of the same AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, CreateDataCatalogCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, CreateDataCatalogCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new CreateDataCatalogCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDataCatalogCommandInput} for command's `input` shape.
 * @see {@link CreateDataCatalogCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDataCatalogCommand = /** @class */ (function (_super) {
  __extends(CreateDataCatalogCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateDataCatalogCommand(input) {
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
  CreateDataCatalogCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "CreateDataCatalogCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateDataCatalogInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDataCatalogOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateDataCatalogCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateDataCatalogCommand(input, context);
  };
  CreateDataCatalogCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateDataCatalogCommand(output, context);
  };
  return CreateDataCatalogCommand;
})($Command);
export { CreateDataCatalogCommand };
//# sourceMappingURL=CreateDataCatalogCommand.js.map
